import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  findAll() {
    return 'Find All';
  }
  create() {
    return 'create';
  }
}
