# Bitmap Transformer

1. Opens file using fs and reads it into a buffer.

2. Determines whether to transform palette data or image data.

3. Directly runs a transform on that section of the buffer.

4. Writes that buffer to a new file.

## Instructions

1. Download repo.

2. Open terminal and navigate to project root directory.

3. From root directory, run `node xform [invert | greyscale | scale red | scale blue | scale green]`.

4. Output file will be in `img` directory.

## Examples

![Example 1 - Non-palette bmp](/img/examples/2.jpg)

![Example 2 - Non-palette bmp](/img/examples/1.jpg)

![Example 3 - Palette bmp](/img/examples/3.jpg)

Made by [Goutham Reddy](https://github.com/gouthamvreddy), [Dewey Luu](https://github.com/DeweyLuu), [Dylan Moberg](https://github.com/mobot11), [Lauren McNerney](https://github.com/lmcnern), and [Justin DeLuna](https://github.com/justinsrd).
