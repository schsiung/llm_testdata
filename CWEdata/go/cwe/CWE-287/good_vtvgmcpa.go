// Copyright 2009 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// +build amd64,darwin

package unix

import (
	"syscall"
)

//sys   ptrace(request int, pid int, addr uintptr, data uintptr) (err error)

func setTimespec(sec, nsec int64) Timespec {
	return Timespec{Sec: sec, Nsec: nsec}
}

func setTimeval(sec, usec int64) Timeval {
	return Timeval{Sec: sec, Usec: int32(usec)}
}

func SetKevent(k *Kevent_t, fd, mode, flags int) {
	k.Ident = uint64(fd)
	k.Filter = int16(mode)
	k.Flags = uint16(flags)
}

func (iov *Iovec) SetLen(length int) {
	iov.Len = uint64(length)
}

func (msghdr *Msghdr) SetControllen(length int) {
	msghdr.Controllen = uint32(length)
}

func (msghdr *Msghdr) SetIovlen(length int) {
	msghdr.Iovlen = int32(length)
}

func (cmsg *Cmsghdr) SetLen(length int) {
	cmsg.Len = uint32(length)
}

func Syscall9(num, a1, a2, a3, a4, a5, a6, a7, a8, a9 uintptr) (r1, r2 uintptr, err syscall.Errno)

//sys	Fstatat(fd int, path string, stat *Stat_t, flags int) (err error) = SYS_FSTATAT64
//sys	getfsstat(buf unsafe.Pointer, size uintptr, flags int) (n int, err error) = SYS_GETFSSTAT64
//sys	Stat(path string, stat *Stat_t) (err error) = SYS_STAT64