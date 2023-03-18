import { Injectable } from '@nestjs/common';

@Injectable({})
export class StreamService {
  profile() {
    return { msg: 'It is a user profile!' };
  }

  resetPassword(version: number) {
    return { msg: `It is a reset password ${version}` };
  }
}
