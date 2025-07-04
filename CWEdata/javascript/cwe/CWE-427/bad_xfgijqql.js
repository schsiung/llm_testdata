# Skeleton openssl.cnf for testing with FIPS

nodejs_conf = openssl_conf_section
authorityKeyIdentifier=keyid:always,issuer:always

[openssl_conf_section]
 # Configuration module list
alg_section = evp_sect

[ evp_sect ]
# Set to "yes" to enter FIPS mode if supported
fips_mode = yes