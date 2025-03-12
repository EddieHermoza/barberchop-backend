import {
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';

export const UploadedImages = () => {
  return UploadedFiles(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        new FileTypeValidator({ fileType: '.(jpg|jpeg|png)' }),
      ],
    }),
  );
};
