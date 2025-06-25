#!/bin/bash

# 定义颜色代码以提高输出可读性（可选）
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 函数：安装依赖项
install_dependencies() {
    echo -e "${GREEN}正在安装构建依赖项...${NC}"
    sudo apt-get update
    sudo apt-get install -y build-essential libtool pkg-config \
        libjpeg-dev libpng-dev libtiff-dev libfreetype6-dev \
        libwebp-dev libopenexr-dev zlib1g-dev libbz2-dev \
        liblzma-dev libxml2-dev
}

# 函数：配置 ImageMagick
configure_imagemagick() {
    echo -e "${GREEN}配置 ImageMagick...${NC}"
    ./configure --prefix=/usr/local \
                --enable-shared \
                --enable-static \
                --with-modules \
                --with-webp=yes \
                --with-openexr=yes \
                --with-jpeg=yes \
                --with-png=yes \
                --with-tiff=yes \
                --with-freetype=yes \
                --with-zlib=yes \
                --with-bzlib=yes \
                --with-lzma=yes \
                --with-xml=yes

    if [ $? -ne 0 ]; then
        echo -e "${RED}配置失败，请检查错误并尝试重新运行脚本。${NC}"
        exit 1
    fi
}

# 函数：编译 ImageMagick
build_imagemagick() {
    echo -e "${GREEN}编译 ImageMagick...${NC}"
    make -j$(nproc)

    if [ $? -ne 0 ]; then
        echo -e "${RED}编译失败，尝试清理并重新编译...${NC}"
        make clean
        make -j$(nproc)

        if [ $? -ne 0 ]; then
            echo -e "${RED}再次编译失败，请手动检查问题。${NC}"
            exit 1
        fi
    fi

    echo -e "${GREEN}ImageMagick 编译完成！${NC}"
}

# 函数：安装 ImageMagick
install_imagemagick() {
    echo -e "${GREEN}安装 ImageMagick...${NC}"
    sudo make install
    sudo ldconfig /usr/local/lib

    if [ $? -ne 0 ]; then
        echo -e "${RED}安装失败，请检查错误并尝试重新运行脚本。${NC}"
        exit 1
    fi

    echo -e "${GREEN}ImageMagick 安装完成！${NC}"
}

# 主逻辑
echo -e "${GREEN}开始构建 ImageMagick...${NC}"

# 安装依赖项
install_dependencies

# 配置、编译和安装 ImageMagick
configure_imagemagick
build_imagemagick
install_imagemagick

# 提示用户如何继续
echo -e "${GREEN}ImageMagick 已成功安装。您可以开始使用它了。${NC}"