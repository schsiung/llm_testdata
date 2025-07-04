// Code generated by tools/cmd/genoptions/main.go. DO NOT EDIT.

package jwe

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestOptionIdent(t *testing.T) {
	require.Equal(t, "WithCEK", identCEK{}.String())
	require.Equal(t, "WithCompress", identCompress{}.String())
	require.Equal(t, "WithContentEncryption", identContentEncryptionAlgorithm{}.String())
	require.Equal(t, "WithFS", identFS{}.String())
	require.Equal(t, "WithKey", identKey{}.String())
	require.Equal(t, "WithKeyProvider", identKeyProvider{}.String())
	require.Equal(t, "WithKeyUsed", identKeyUsed{}.String())
	require.Equal(t, "WithMergeProtectedHeaders", identMergeProtectedHeaders{}.String())
	require.Equal(t, "WithMessage", identMessage{}.String())
	require.Equal(t, "WithPerRecipientHeaders", identPerRecipientHeaders{}.String())
	require.Equal(t, "WithPretty", identPretty{}.String())
	require.Equal(t, "WithProtectedHeaders", identProtectedHeaders{}.String())
	require.Equal(t, "WithRequireKid", identRequireKid{}.String())
	require.Equal(t, "WithSerialization", identSerialization{}.String())
}
