name: 'NocoDB Nightly Dev Release'

on:
  # Triggered manually
  workflow_dispatch:
  schedule:
    # every 6 hours
    - cron: '0 */6 * * *'

jobs:
  # enrich tag for nightly auto release
  set-tag:
    runs-on: 'ubuntu-latest'
    steps:
      - name: set-tag
        id: tag-step
        run: |
          # Get current date
          CURRENT_DATE=$(date +"%Y%m%d")
          CURRENT_TIME=$(date +"%H%M")
          TAG_NAME=${CURRENT_DATE}-${CURRENT_TIME}
          IS_DAILY='Y'
          # Get current version
          CURRENT_VERSION=$(basename $(curl -fs -o/dev/null -w %{redirect_url} https://github.com/nocodb/nocodb/releases/latest))
          # Set the tag
          if [[ ${{ github.event_name }} == 'workflow_dispatch' ]]; then
            IS_DAILY='N'
          fi
          echo "::set-output name=NIGHTLY_BUILD_TAG::${TAG_NAME}"
          echo "::set-output name=IS_DAILY::${IS_DAILY}"
          echo "::set-output name=CURRENT_VERSION::${CURRENT_VERSION}"
      - name: verify-tag
        run: |
          echo ${{ steps.tag-step.outputs.NIGHTLY_BUILD_TAG }}
          echo ${{ steps.tag-step.outputs.IS_DAILY }}
          echo ${{ steps.tag-step.outputs.CURRENT_VERSION }}
    outputs:
      nightly_build_tag: ${{ steps.tag-step.outputs.NIGHTLY_BUILD_TAG }}
      is_daily: ${{ steps.tag-step.outputs.IS_DAILY }}
      current_version: ${{ steps.tag-step.outputs.CURRENT_VERSION }}
  # Build frontend and backend and publish to npm
  release-npm:
    needs: set-tag
    uses: ./.github/workflows/release-npm.yml
    with:
      tag: ${{ needs.set-tag.outputs.nightly_build_tag }}
      targetEnv: 'DEV'
    secrets:
      NPM_TOKEN: "${{ secrets.NPM_TOKEN }}"

  # Build executables and publish to GitHub
  release-executables:
    needs: [set-tag, release-npm]
    uses: ./.github/workflows/release-timely-executables.yml
    with:
      tag: ${{ needs.set-tag.outputs.current_version }}-${{ needs.set-tag.outputs.nightly_build_tag }}
    secrets:
      NC_GITHUB_TOKEN: "${{ secrets.NC_GITHUB_TOKEN }}"

  # Build docker image and push to docker hub
  release-docker:
    needs: [set-tag, release-npm]
    uses: ./.github/workflows/release-docker.yml
    with:
      currentVersion: ${{ needs.set-tag.outputs.current_version }}
      tag: ${{ needs.set-tag.outputs.nightly_build_tag }}
      targetEnv: 'DEV'
      isDaily: ${{ needs.set-tag.outputs.is_daily }}
    secrets:
      DOCKERHUB_USERNAME: "${{ secrets.DOCKERHUB_USERNAME }}"
      DOCKERHUB_TOKEN: "${{ secrets.DOCKERHUB_TOKEN }}"