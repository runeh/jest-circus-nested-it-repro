# jest circus bug repro

## Bug 1

jest-circus allows nested `test` calls, but only when the `test` is not enclosed
in `describe`.

### Repro

`yarn repro1`

### Expected

jest-circus warns me that there are nested `test` calls.

### Actual

The tests are run

## Bug 2

If there are nested `test` calls, and they are inside a `describe` call,
jest-circus warns about the error but with a confusing error message.

### Repro:

`yarn repro2`

### Expected:


An informative error message. The default runner gives me: ```Tests cannot be
nested. Test `inner test` cannot run because it is nested within `outer test`.```

### Actual:

I get the error message `Status should be present after tests are run.`


