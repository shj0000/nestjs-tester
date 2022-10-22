import { Controller, Get, Res } from '@nestjs/common';

@Controller('facebook')
export class FacebookController {
  
  @Get()
  findAll(@Res() res) {
    // const users = this.usersService.findAll()
    console.log(res)

    const testMap = {
      ct: 1,
      ct2: 3,
    }

    return res
      .status(200)
      .send(testMap)

  }

}
