import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get(':id')
  getPost(@Param('id') id) {
    return this.postsService.fetchPost(id);
  }
}
