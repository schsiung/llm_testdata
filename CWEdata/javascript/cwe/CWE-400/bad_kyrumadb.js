name: "Release : Executables"

on:
  # Triggered manually
  workflow_dispatch:
    inputs:
      tag:
        description: "Tag name"
        required: true
  # Triggered by release-nocodb.yml
  workflow_call:
    inputs:
      tag:
        description: "Tag name"
        required: true
        type: string
    secrets:
      NC_GITHUB_TOKEN:
        required: true
jobs:
  build-executables:
    runs-on: ubuntu-latest
    steps:
      # Get the latest draft release for asset upload url
      - uses: cardinalby/git-get-release-action@v1
        id: get_release
        env:
          GITHUB_TOKEN: ${{ secrets.NC_GITHUB_TOKEN }}
        with:
          latest: 1
          draft: true
      - uses: actions/checkout@v3
      - name: Cache node modules
        id: cache-npm
        uses: actions/cache@v3
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: Cache pkg modules
        id: cache-pkg
        uses: actions/cache@v3
        env:
          cache-name: cache-pkg
        with:
          # pkg cache files are stored in `~/.pkg-cache`
          path: ~/.pkg-cache
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      # for building images for all platforms these libraries are required in Linux
      - name: Install QEMU and ldid
        run: |
          sudo apt update
          # Install qemu
          sudo apt install qemu binfmt-support qemu-user-static
          # install ldid
          git clone https://github.com/daeken/ldid.git
          cd ./ldid
          ./make.sh
          sudo cp ./ldid /usr/local/bin

      - uses: actions/setup-node@v3
        with:
          node-version: 16

      - name : Install nocodb, other dependencies and build executables
        run: |
          cd ./scripts/pkg-executable

          # Install nocodb version based on provided tag name
          npm i -E nocodb@$TAG

          # install npm dependendencies
          npm i

          # Copy sqlite binaries
          rsync -rvzhP ./binaries/binding/ ./node_modules/sqlite3/lib/binding/

          # clean up code to optimize size
          npx modclean --patterns="default:*" --ignore="nc-lib-gui/**,dayjs/**,express-status-monitor/**,sqlite3/**" --run

          # build executables
          npm run build

          ls ./dist

          # Move macOS executables for signing
          mkdir ./mac-dist
          mv ./dist/Noco-macos-arm64 ./mac-dist/
          mv ./dist/Noco-macos-x64 ./mac-dist/

      - name: Upload win-arm64 build to asset
        id: upload-release-asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.get_release.outputs.upload_url }}
          asset_path: ./scripts/pkg-executable/dist/Noco-win-arm64.exe
          asset_name: Noco-win-arm64
          asset_content_type: application/octet-stream

      - name: Upload win-x64 build to asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.get_release.outputs.upload_url }}
          asset_path: ./scripts/pkg-executable/dist/Noco-win-x64.exe
          asset_name: Noco-win-x64
          asset_content_type: application/octet-stream

      - name: Upload linux-arm64 build to asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.get_release.outputs.upload_url }}
          asset_path: ./scripts/pkg-executable/dist/Noco-linux-arm64
          asset_name: Noco-linux-arm64
          asset_content_type: application/octet-stream

      - name: Upload linux-x64 build to asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.get_release.outputs.upload_url }}
          asset_path: ./scripts/pkg-executable/dist/Noco-linux-x64
          asset_name: Noco-linux-x64
          asset_content_type: application/octet-stream

      - uses: actions/upload-artifact@master
        with:
          name: ${{ github.event.inputs.tag || inputs.tag }}
          path: scripts/pkg-executable/mac-dist
          retention-days: 1
    outputs:
      upload_url: ${{ steps.get_release.outputs.upload_url }}
  sign-mac-executables:
    runs-on: macos-latest
    needs: build-executables
    steps:

      - uses: actions/download-artifact@master
        with:
          name: ${{ github.event.inputs.tag || inputs.tag }}
          path: scripts/pkg-executable/mac-dist

      - name: Sign macOS executables
        run: |
          /usr/bin/codesign --force -s - ./scripts/pkg-executable/mac-dist/Noco-macos-arm64 -v
          /usr/bin/codesign --force -s - ./scripts/pkg-executable/mac-dist/Noco-macos-x64 -v

      - uses: actions/upload-artifact@master
        with:
          name: ${{ github.event.inputs.tag || inputs.tag }}
          path: scripts/pkg-executable/mac-dist
          retention-days: 1


  publish-mac-executables-and-homebrew:
    needs: [sign-mac-executables,build-executables]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@master
        with:
          name: ${{ github.event.inputs.tag || inputs.tag }}
          path: scripts/pkg-executable/mac-dist



      - uses: actions/checkout@v3
        with:
          path: 'homebrew-nocodb'
          token: ${{ secrets.NC_GITHUB_TOKEN }}
          repository: 'nocodb/homebrew-nocodb'
          fetch-depth: 0

      - name: Compress files and calculate checksum
        run: |
          cd ./scripts/pkg-executable
          cp ./mac-dist/Noco-macos-x64 ./mac-dist/nocodb
          tar -czf ./mac-dist/nocodb.tar.gz ./mac-dist/nocodb
          rm ./mac-dist/nocodb
          echo "::set-output name=CHECKSUM::$(shasum -a 256 ./mac-dist/nocodb.tar.gz | awk '{print $1}')"
        id: compress


      - name: Upload macos-x64 build to asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ needs.build-executables.outputs.upload_url }}
          asset_path: ./scripts/pkg-executable/mac-dist/Noco-macos-x64
          asset_name: Noco-macos-x64
          asset_content_type: application/octet-stream



      - name: Upload macos-arm64 build to asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ needs.build-executables.outputs.upload_url }}
          asset_path: ./scripts/pkg-executable/mac-dist/Noco-macos-arm64
          asset_name: Noco-macos-arm64
          asset_content_type: application/octet-stream



      - name: Upload macos compressed build(for homebrew) to asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ needs.build-executables.outputs.upload_url }}
          asset_path: ./scripts/pkg-executable/mac-dist/nocodb.tar.gz
          asset_name: nocodb.tar.gz
          asset_content_type: application/octet-stream


      - name: Generate Homebrew Formula class and push
        run: |
          FORMULA_CLASS_STR=$(cat << EOF
          class Nocodb < Formula
            desc "Get Human Readable file size information. - CLI"
            homepage "https://github.com/nocodb/nocodb"
            url "https://github.com/nocodb/nocodb/releases/download/${{ github.event.inputs.tag || inputs.tag }}/nocodb.tar.gz"
            sha256 "${{ steps.compress.outputs.CHECKSUM }}"
            license "MIT"
            version "${{ github.event.inputs.tag || inputs.tag }}"

            def install
              bin.install "nocodb"
            end
          end
          EOF
          )

          cd ./homebrew-nocodb

          printf "$FORMULA_CLASS_STR" > ./Formula/nocodb.rb

          git config user.name 'github-actions[bot]'
          git config user.email 'github-actions[bot]@users.noreply.github.com'

          git commit ./Formula/nocodb.rb -m "Automatic publish"
          git push



