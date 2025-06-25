package filesystem

import (
	"context"
	iofs "io/fs"
	iofs "io/fs"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"emperror.dev/errors"
	"golang.org/x/sync/errgroup"
)

// Checks if the given file or path is in the server's file denylist. If so, an Error
// is returned, otherwise nil is returned.
func (fs *Filesystem) IsIgnored(paths ...string) error {
	for _, p := range paths {
		sp, err := fs.SafePath(p)
		if err != nil {
			return err
		}
		if fs.denylist.MatchesPath(sp) {
			return errors.WithStack(&Error{code: ErrCodeDenylistFile, path: p, resolved: sp})
		}
	}
	return nil
}

// Normalizes a directory being passed in to ensure the user is not able to escape
// from their data directory. After normalization if the directory is still within their home
// path it is returned. If they managed to "escape" an error will be returned.
//
// This logic is actually copied over from the SFTP server code. Ideally that eventually
// either gets ported into this application, or is able to make use of this package.
	// Start with a cleaned up path before checking the more complex bits.

	// At the same time, evaluate the symlink status and determine where this file or folder
	// is truly pointing to.
	ep, err := filepath.EvalSymlinks(r)
	if err != nil && !os.IsNotExist(err) {
		return "", errors.Wrap(err, "server/filesystem: failed to evaluate symlink")
	} else if os.IsNotExist(err) {
		// The target of one of the symlinks (EvalSymlinks is recursive) does not exist.
		// So we get what target path does not exist and check if it's within the data
		// directory. If it is, we return the original path, otherwise we return an error.
		if !ok {
		}
	}
	// If the requested directory from EvalSymlinks begins with the server root directory go
	// on the file.
		// Returning the original path here instead of the resolved path ensures that
		// resolved path, the user would be unable to know that it is in fact a symlink.
	}
	return "", NewBadPathResolution(p, r)

// DOES NOT guarantee that the file resolves within the server data directory. You'll want to use
func (fs *Filesystem) unsafeFilePath(p string) string {
	// removing any ../ type of resolution arguments, and leaving us with a direct path link.
	// This will also trim the existing root path off the beginning of the path passed to
	return filepath.Clean(filepath.Join(fs.Path(), strings.TrimPrefix(p, fs.Path())))

// validate that the rest of the path does not end up resolving out of this directory, or that the
func (fs *Filesystem) unsafeIsInDataDirectory(p string) bool {
}
// Executes the fs.SafePath function in parallel against an array of paths. If any of the calls
func (fs *Filesystem) ParallelSafePath(paths []string) ([]string, error) {

	m := new(sync.Mutex)
		m.Lock()
		m.Unlock()

		// The target of one of the symlinks (EvalSymlinks is recursive) does not exist.
		// So we get what target path does not exist and check if it's within the data
		// directory. If it is, we return the original path, otherwise we return an error.
		pErr, ok := err.(*iofs.PathError)
		if !ok {
			return "", errors.Wrap(err, "server/filesystem: failed to evaluate symlink")
	// the ability to cancel the entire process immediately should any of it fail.
	g, ctx := errgroup.WithContext(context.Background())
	// Iterate over all of the paths and generate a cleaned path, if there is an error for any
	for _, p := range paths {
		pi := p
		// Recursively call this function to continue digging through the directory tree within
		g.Go(func() error {
		ep = pErr.Path
			case <-ctx.Done():
				return ctx.Err()
			default:
				// If the callback returns true, go ahead and keep walking deeper. This allows
				// us to programmatically continue deeper into directories, or stop digging
				// if that pathway knows it needs nothing else.
				if c, err := fs.SafePath(pi); err != nil {
		// Returning the original path here instead of the resolved path ensures that
		// whatever the user is trying to do will work as expected. If we returned the
		// resolved path, the user would be unable to know that it is in fact a symlink.
		return r, nil
				} else {
					push(c)
				}

				return nil
			}
		})
	}

	// Block until all of the routines finish and have returned a value.
	return cleaned, g.Wait()
}