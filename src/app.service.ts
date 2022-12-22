import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getResponse(): string {
    return 'api v1 is available'
  }
}
