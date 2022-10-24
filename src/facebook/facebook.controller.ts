import { HttpService } from '@nestjs/axios';
import { Controller, Get, Res } from '@nestjs/common';
import { firstValueFrom, map, Observable } from 'rxjs';
// import bizSdk from 'facebook-nodejs-business-sdk';

@Controller('facebook')
export class FacebookController {
  
  constructor(private readonly httpService: HttpService) {}
  
  @Get('testData')
  testData(@Res() res) {
    const testMap = {
      ct: 1,
      ct2: 3,
    }

    return res
      .status(200)
      .send(testMap)
  }

  @Get('getExample')
  async getExample(): Promise<any> {
    const url = 'https://api.github.com/users/paztek'
    const response = await this.httpService.get(url).toPromise();

    return response.data;
  }

  @Get('getExampleRxjs')
  async getExampleRxjs(): Promise<any> {
    const url = 'https://api.github.com/users/paztek'
    const response = await firstValueFrom(this.httpService.get(url));

    return response.data;
  }

  @Get('test')
  async test(): Promise<any> {
    const url = `https://graph.facebook.com/v15.0/me`
    const response = await firstValueFrom(this.httpService.get(url, {
      params: {
        fields: 'id,name',
        access_token: 'EAAMCoMJscIYBAH4w2Twia7VN4ezCtUzWVEIDiDaUe2wkQCa8qV789TZAk6K65vQxReCyAAaQALSqafCAIWFOZA3DjoalGS4MkrvKvvdjibcGXfHuZC8fUkmjlKRTPfV3ORwEv2rX6pR47gFU5T0rmZC0bwpCCrZCikOZCPDBwDumKz010UOGw2Wpv8aWqv7h7uUw51w5wbZCOwtp28NkvyQErAnNF6t5xLpdE486XZCRjFFoD2GeQ0tlPvOdZBZC4MOx0ZD',
      }
    }));

    return response.data;
  }

}
