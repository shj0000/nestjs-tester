import { Controller, Get, Res } from '@nestjs/common';

@Controller('facebook')
export class FacebookController {
  @Get()
  findAll(@Res() res) {
    // const users = this.usersService.findAll()

    return res.status(200).send(`users`);
  }
}
