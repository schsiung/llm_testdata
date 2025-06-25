meta:
  name: Extractor
  description: Extracts content from the uploaded object (email, archive)
  replicas: 5

settings:
  max_files_in_archive: 15
  max_files_in_recursive_archive: 25
  max_recurse: 2
  max_files_in_recursive_archive: 25
  max_recurse: 2
  max_extracted_filesize_in_mb: 100
  max_is_error: no
  zip_passwords:
    - ''
    - virus
    - CERT_SOC
    - cert
    - pandora
    - infected
    - 123