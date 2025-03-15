import {
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UploadedFile,
} from '@nestjs/common';

export const UploadedImages = () => {
  return UploadedFiles(
    new ParseFilePipe({
      fileIsRequired: false,
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        new FileTypeValidator({ fileType: '.(jpg|jpeg|png)' }),
      ],
    }),
  );
};

export const UploadedImage = () => {
  return UploadedFile(
    new ParseFilePipe({
      fileIsRequired: false,
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        new FileTypeValidator({ fileType: '.(jpg|jpeg|png)' }),
      ],
    }),
  );
};
