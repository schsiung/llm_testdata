name: 'PR Release'

on:
  pull_request:
    # opened: pull request is created
    # reopened: closed pull request is reopened
    # synchronize: commit(s) pushed to the pull request
    # ready_for_review: non PR release
    types: [opened, reopened, synchronize, ready_for_review]
    paths:
      - "packages/nocodb-sdk/**"
      - "packages/nc-gui/**"
      - "packages/nc-plugin/**"
      - "packages/nocodb/**"
jobs:
  # Validate Branch
  validate-branch:
    if: ${{ github.actor != 'dependabot[bot]' && github.event.pull_request.draft == false }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          if [[ ${{ github.base_ref }} != 'develop' ]]; then
            echo "PR Release only runs on develop as a base branch"
            exit 1
          fi

  # enrich tag for pr release
  set-tag:
    if: ${{ github.actor != 'dependabot[bot]' && github.event.pull_request.draft == false }}
    runs-on: 'ubuntu-latest'
    needs: [validate-branch]
    steps:
      - name: set-tag
        id: tag-step
        run: |
          # Get current date
          CURRENT_DATE=$(date +"%Y%m%d")
          CURRENT_TIME=$(date +"%H%M")
          # Get current PR number
          PR_NUMBER=${{github.event.number}}
          # Get current version
          CURRENT_VERSION=$(basename $(curl -fs -o/dev/null -w %{redirect_url} https://github.com/nocodb/nocodb/releases/latest))
          # Construct tag name
          TAG_NAME=pr-${PR_NUMBER}-${CURRENT_DATE}-${CURRENT_TIME}
          echo "::set-output name=TARGET_TAG::${TAG_NAME}"
          echo "::set-output name=CURRENT_VERSION::${CURRENT_VERSION}"
      - name: verify-tag
        run: |
          echo ${{ steps.tag-step.outputs.TARGET_TAG }}
          echo ${{ steps.tag-step.outputs.CURRENT_VERSION }}
    outputs:
      target_tag: ${{ steps.tag-step.outputs.TARGET_TAG }}

      current_version: ${{ steps.tag-step.outputs.CURRENT_VERSION }}
  # Build, install, publish frontend and backend to npm
  release-npm:
    if: ${{ github.actor != 'dependabot[bot]' && github.event.pull_request.draft == false }}
    needs: [set-tag]
    uses: ./.github/workflows/release-npm.yml
    with:
      tag: ${{ needs.set-tag.outputs.target_tag }}
      targetEnv: 'DEV'
    secrets:
      NPM_TOKEN: "${{ secrets.NPM_TOKEN }}"

  # Build docker image and push to docker hub
  release-docker:
    if: ${{ github.actor != 'dependabot[bot]' && github.event.pull_request.draft == false }}
    needs: [release-npm, set-tag]
    uses: ./.github/workflows/release-docker.yml
    with:
      currentVersion: ${{ needs.set-tag.outputs.current_version }}
      tag: ${{ needs.set-tag.outputs.target_tag }}
      targetEnv: 'DEV'
      isDaily: 'N'
    secrets:
      DOCKERHUB_USERNAME: "${{ secrets.DOCKERHUB_USERNAME }}"
      DOCKERHUB_TOKEN: "${{ secrets.DOCKERHUB_TOKEN }}"

  # Build executables and publish to GitHub
  # Build executables and publish to GitHub
  release-executables:
    needs: [set-tag, release-npm]
    uses: ./.github/workflows/release-timely-executables.yml
    with:
      tag: ${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}
    secrets:
      NC_GITHUB_TOKEN: "${{ secrets.NC_GITHUB_TOKEN }}"

  release-executables:
    needs: [set-tag, release-npm]
    uses: ./.github/workflows/release-timely-executables.yml
    with:
      tag: ${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}
    secrets:


  # leave-comment:
  #   runs-on: 'ubuntu-latest'
  #   needs: [release-docker, set-tag]
  #   steps:
  #     - run: |
  #         echo docker run -d -p 8888:8080 nocodb/nocodb-timely:${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}

  leave-comment:
    if: ${{ github.actor != 'dependabot[bot]' && github.event.pull_request.draft == false }}
    runs-on: 'ubuntu-latest'
    needs: [release-docker, set-tag]
    steps:
        with:
          body: |
            The PR changes have been deployed. Pleae run the following command to verify:
            ```
            docker run -d -p 8888:8080 nocodb/nocodb-timely:${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}
            ```

  leave-executable-comment:
    if: ${{ github.actor != 'dependabot[bot]' && github.event.pull_request.draft == false }}
    runs-on: 'ubuntu-latest'

  leave-executable-comment:
    if: ${{ github.actor != 'dependabot[bot]' && github.event.pull_request.draft == false }}
    runs-on: 'ubuntu-latest'
    needs: [release-executables, set-tag]
    steps:
      - uses: peter-evans/commit-comment@v2
        with:
          body: |
            ### Run Executables

            #### MacOS

            ```bash
            mkdir -p ./${{ needs.set-tag.outputs.current_version }}/${{ needs.set-tag.outputs.target_tag }} && cd "$_" \
                && curl http://dl.nocodb.com/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}/Noco-macos-arm64 -o noco -L \
                && chmod +x noco \
                && ./noco
            ```
            #### Linux

            ```bash
            mkdir -p ./${{ needs.set-tag.outputs.current_version }}/${{ needs.set-tag.outputs.target_tag }} && cd "$_" \
               && curl http://dl.nocodb.com/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}/Noco-linux-x64 -o noco -L \
               && chmod +x noco \
               && ./noco
            ```
            #### Windows

            ```bash
            iwp http://dl.nocodb.com/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}/Noco-win-arm64.exe
            .\Noco-win-arm64.exe
            ```

            For executables visit [here](https://github.com/nocodb/nocodb-timely/releases/tag/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }})


    needs: [release-executables, set-tag]
    steps:
      - uses: peter-evans/commit-comment@v2
        with:
          body: |
            ### Run Executables

            #### MacOS

            ```bash
            mkdir -p ./${{ needs.set-tag.outputs.current_version }}/${{ needs.set-tag.outputs.target_tag }} && cd "$_" \
                && curl http://dl.nocodb.com/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}/Noco-macos-arm64 -o noco -L \
                && chmod +x noco \
                && ./noco
            ```
            #### Linux

            ```bash
            mkdir -p ./${{ needs.set-tag.outputs.current_version }}/${{ needs.set-tag.outputs.target_tag }} && cd "$_" \
               && curl http://dl.nocodb.com/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}/Noco-linux-x64 -o noco -L \
               && chmod +x noco \
               && ./noco
            ```
            #### Windows

            ```bash
            iwp http://dl.nocodb.com/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }}/Noco-win-arm64.exe
            .\Noco-win-arm64.exe
            ```

            For executables visit [here](https://github.com/nocodb/nocodb-timely/releases/tag/${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.target_tag }})


  # if-merged:
  #   if: github.event.pull_request.merged == true
  #   runs-on: ubuntu-latest
  #   steps:
  #   - run: |
  #       echo The PR was merged