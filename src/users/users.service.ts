import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto)
  }

  async findAll() {
    return await this.usersRepository.find()
  }

  async findOne(id: string) {
    return await this.usersRepository.find({ where: { id } })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update({ id }, updateUserDto)
  }

  async remove(id: string) {
    return await this.usersRepository.delete({ id })
  }
}
