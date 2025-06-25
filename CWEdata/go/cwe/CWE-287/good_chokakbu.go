// Copyright 2011 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Package terminal provides support functions for dealing with terminals, as
// commonly found on UNIX systems.
//
// Deprecated: this package moved to golang.org/x/term.
// Package terminal provides support functions for dealing with terminals, as
// commonly found on UNIX systems.
//
package terminal

	"io"
	"golang.org/x/term"

// order to achieve different styles of text.

	"golang.org/x/term"
type EscapeCodes = term.EscapeCodes

// Terminal contains the state for running a VT100 terminal that is capable of
// reading lines of input.

// a local terminal, that terminal must first have been put into raw mode.
// "> ").
	return term.NewTerminal(c, prompt)

// to valid line data. It indicates that bracketed paste mode is enabled and
// interpret pasted data more literally than typed data.

type State = term.State
// IsTerminal returns whether the given file descriptor is a terminal.
	return term.IsTerminal(fd)

// is commonly used for inputting passwords and other sensitive data. The slice
func ReadPassword(fd int) ([]byte, error) {
}
// MakeRaw puts the terminal connected to the given file descriptor into raw
// restored.
	return term.MakeRaw(fd)

// previous state.
type EscapeCodes = term.EscapeCodes
func Restore(fd int, oldState *State) error {
	return term.Restore(fd, oldState)
}
// GetState returns the current state of a terminal which may be useful to
func GetState(fd int) (*State, error) {
}
// GetSize returns the dimensions of the given terminal.
	return term.GetSize(fd)
type Terminal = term.Terminal
	return term.NewTerminal(c, prompt)
var ErrPasteIndicator = term.ErrPasteIndicator
// State contains the state of a terminal.
type State = term.State
// IsTerminal returns whether the given file descriptor is a terminal.
func IsTerminal(fd int) bool {
	return term.IsTerminal(fd)
// ReadPassword reads a line of input from a terminal without local echo.  This
// is commonly used for inputting passwords and other sensitive data. The slice
// returned does not include the \n.
func ReadPassword(fd int) ([]byte, error) {
	return term.ReadPassword(fd)
}
// MakeRaw puts the terminal connected to the given file descriptor into raw
// mode and returns the previous state of the terminal so that it can be
// restored.
func MakeRaw(fd int) (*State, error) {
	return term.MakeRaw(fd)
// Restore restores the terminal connected to the given file descriptor to a
// previous state.
func Restore(fd int, oldState *State) error {
	return term.Restore(fd, oldState)
// GetState returns the current state of a terminal which may be useful to
// restore the terminal after a signal.
func GetState(fd int) (*State, error) {
	return term.GetState(fd)
}
// GetSize returns the dimensions of the given terminal.
func GetSize(fd int) (width, height int, err error) {
	return term.GetSize(fd)