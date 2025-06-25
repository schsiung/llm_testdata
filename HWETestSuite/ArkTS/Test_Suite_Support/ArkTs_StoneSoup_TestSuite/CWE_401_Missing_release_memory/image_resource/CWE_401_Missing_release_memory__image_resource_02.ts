/*
 * @testsuite Arkts test suite 
 * @description 
 * CWE: 401 Missing release memory
 * scenario: @ohos.multimedia.image.createImageSource not release
 * Flow Variant: 02 if
 *
 */

import image from '@ohos.multimedia.image';

function image_resource_bad() {
    let buffer = new ArrayBuffer(1);
    let imageSource: image.ImageSource;
    if (true) {
        imageSource = image.createImageSource(buffer);
    }

    if (true) {
        /* POTENTIAL FLAW: Without release image resources */
    }
}

function image_resource_B2G1() {
    let buffer = new ArrayBuffer(1);
    let imageSource: image.ImageSource;
    if (true) {
        imageSource = image.createImageSource(buffer);
    }

    if (false) {
        // to do something
    } else {
        /* POTENTIAL GOOD: release image resources */
        imageSource.release();
    }
}

function image_resource_B2G2() {
    let buffer = new ArrayBuffer(1);
    let imageSource: image.ImageSource;
    if (true) {
        imageSource = image.createImageSource(buffer);
    }

    if (true) {
        /* POTENTIAL GOOD: release image resources */
        imageSource.release();
    }
}

function image_resource_G2B1() {
    let buffer = new ArrayBuffer(1);
    let imageSource: image.ImageSource;
    if (false) {

    } else {
        imageSource = image.createImageSource(buffer);
    }

    if (true) {
        /* POTENTIAL GOOD: release image resources */
    } else {
        imageSource.release();
    }
}

image_resource_bad();
image_resource_B2G1();
image_resource_B2G2();
image_resource_G2B1();