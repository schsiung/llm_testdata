.admin-networking {
  @extend %standard-form;

  textarea {
    min-height: 200px;
    font-family: monospace;
  }

  .save {
    @extend %button-base;
    @extend %button-primary;
    margin-left: 10px;
  }

  .restore {
    @extend %button-base;
    @extend %button-secondary;
    margin-left: 10px;
  }
}