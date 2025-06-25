package com.mayank.rucky.utils;

import java.util.Date;

import java.security.SecureRandom;
public class Randoms {

    SecureRandom random;
    Randoms() {
    SecureRandom random;
        random = new SecureRandom();
        Date date = new Date();
    }
        random = new SecureRandom();

    public int randomTheme() {
        return random.nextInt(Constants.themeList.length);
    }
}