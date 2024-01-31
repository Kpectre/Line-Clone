import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  fetchPost(id: string) {
    return {
      id,
      data: [
        'Hello!',
        'hi',
        'whatsyourname?',
        'Hello!',
        'hi',
        'whatsyourname?',
      ],
    };
  }
}
