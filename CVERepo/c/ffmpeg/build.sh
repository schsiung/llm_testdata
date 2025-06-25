#!/bin/bash

# 定义颜色代码以提高输出可读性（可选）
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 设置变量
PREFIX="$HOME/ffmpeg_build"                 # 安装位置
TOOLS="$HOME/bin"                           # 工具安装位置
EXTRA_CFLAGS="-I$PREFIX/include"
EXTRA_LDFLAGS="-L$PREFIX/lib"

# 函数：安装依赖项
install_dependencies() {
    echo -e "${GREEN}正在安装构建依赖项...${NC}"
    sudo apt-get update
    sudo apt-get install -y autoconf automake build-essential libass-dev \
        libfreetype6-dev libsdl2-dev libtheora-dev libtool libva-dev \
        libvdpau-dev libvorbis-dev libxcb1-dev libxvidcore-dev \
        pkg-config texinfo wget zlib1g-dev nasm yasm \
        libx264-dev libx265-dev  # 添加 x264 和 x265 相关的依赖

    if ! pkg-config --exists x264; then
        echo -e "${RED}未能通过 pkg-config 找到 x264，尝试手动安装最新版本...${NC}"
        install_x264
    fi

    if ! pkg-config --exists x265; then
        echo -e "${RED}未能通过 pkg-config 找到 x265，尝试手动安装最新版本...${NC}"
        install_x265
    fi
}

# 函数：手动安装 x264
install_x264() {
    X264_DIR="$HOME/x264"
    mkdir -p "$X264_DIR"
    cd "$X264_DIR" || exit

    echo -e "${GREEN}克隆 x264 仓库...${NC}"
    git clone https://code.videolan.org/videolan/x264.git .
    
    echo -e "${GREEN}配置和编译 x264...${NC}"
    ./configure --prefix="$PREFIX" --enable-static
    make -j$(nproc)
    sudo make install
}

# 函数：手动安装 x265
install_x265() {
    X265_DIR="$HOME/x265"
    mkdir -p "$X265_DIR"
    cd "$X265_DIR" || exit

    echo -e "${GREEN}克隆 x265 仓库...${NC}"
    git clone https://bitbucket.org/multicoreware/x265_git.git .

    cd source || exit
    
    echo -e "${GREEN}配置和编译 x265...${NC}"
    cmake -DCMAKE_INSTALL_PREFIX="$PREFIX" -DENABLE_SHARED:bool=off .
    make -j$(nproc)
    sudo make install
}

# 函数：配置 FFmpeg
configure_ffmpeg() {
    echo -e "${GREEN}配置 FFmpeg...${NC}"
    ./configure --prefix="$PREFIX" \
                --extra-cflags="$EXTRA_CFLAGS" \
                --extra-ldflags="$EXTRA_LDFLAGS" \
                --bindir="$TOOLS" \
                --enable-gpl \
                --enable-libass \
                --enable-libfreetype \
                --enable-libtheora \
                --enable-libvorbis \
                --enable-libx264 \
                --enable-libx265 \
                --enable-libxvid \
                --enable-nonfree \
                --enable-postproc \
                --enable-small \
                --enable-version3

    if [ $? -ne 0 ]; then
        echo -e "${RED}配置失败，请检查错误并尝试重新运行脚本。${NC}"
        exit 1
    fi
}

# 函数：编译 FFmpeg
build_ffmpeg() {
    echo -e "${GREEN}编译 FFmpeg...${NC}"
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

    echo -e "${GREEN}FFmpeg 编译完成！${NC}"
}

# 函数：安装 FFmpeg
install_ffmpeg() {
    echo -e "${GREEN}安装 FFmpeg...${NC}"
    make install

    if [ $? -ne 0 ]; then
        echo -e "${RED}安装失败，请检查错误并尝试重新运行脚本。${NC}"
        exit 1
    fi

    echo -e "${GREEN}FFmpeg 安装完成！${NC}"
}

# 主逻辑
echo -e "${GREEN}开始构建 FFmpeg...${NC}"

# 安装依赖项
install_dependencies

# 配置、编译和安装 FFmpeg
configure_ffmpeg
build_ffmpeg
install_ffmpeg

# 提示用户如何继续
echo -e "${GREEN}FFmpeg 已成功安装。您可以开始使用它了。${NC}"