package io.whitesource.cure;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class FileSecurityUtilsTests {

  @Test
  void isFileInDir_outside_successfullyWithResult() throws IOException {
    Path sourcePath = Paths.get("src").toAbsolutePath();
    Path cwd = Paths.get("").toAbsolutePath();

    boolean isOutside = FileSecurityUtils.isFileOutsideDir(cwd.toString(), sourcePath.toString());
    Assertions.assertTrue(isOutside);
  }

  @Test
  void isFileInDir_inside_successfullyWithResult() throws IOException {
    Path sourcePath = Paths.get("src").toAbsolutePath();
    Path cwd = Paths.get("").toAbsolutePath();

    boolean isOutside = FileSecurityUtils.isFileOutsideDir(sourcePath.toString(), cwd.toString());
    Assertions.assertFalse(isOutside);
  }

  @Test
  void isFileInDir_null_successfully() {
    Assertions.assertThrows(
            NullPointerException.class, () -> FileSecurityUtils.isFileOutsideDir(null, null));

    Assertions.assertThrows(
            NullPointerException.class,
            () -> FileSecurityUtils.isFileOutsideDir("file-path-place-holder", null));

    Assertions.assertThrows(
            NullPointerException.class,
            () -> FileSecurityUtils.isFileOutsideDir(null, "base-dir-place-holder"));
  }

  @Test
  void normalize_validInput_successfullyWithResult() {
    String validInput = "./In/../Valid/Un/../Normalized/./Path";
    String expectedResult = "Valid" + File.separator + "Normalized" + File.separator + "Path";

    String actualResult = FileSecurityUtils.normalize(validInput);
    Assertions.assertEquals(expectedResult, actualResult);
  }

  @Test
  void isFileOutsideDirStartsWithTest() throws IOException {
    String taintedInput = "/usr/foo/../foo-bar/bar";
    String baseDir = "/usr/foo";
    Assertions.assertTrue(FileSecurityUtils.isFileOutsideDir(taintedInput, baseDir));
  }

  @Test
  void isFileOutsideDirStartsWithTest() throws IOException {
    String taintedInput = "/usr/foo/../foo-bar/bar";
    String baseDir = "/usr/foo";
    Assertions.assertTrue(FileSecurityUtils.isFileOutsideDir(taintedInput, baseDir));
  }

  @Test
  void normalize_null_successfully() {
    Assertions.assertNull(FileSecurityUtils.normalize(null));
  }
}