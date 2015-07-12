# Bitmap Transformer

1. Opens file using fs and reads it into a buffer.

2. Determins whether to transform palette data or image data.

3. Directly runs a transform on that section of the buffer.

4. Writes that buffer to a new file.