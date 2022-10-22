import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { ulid } from 'ulid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private connection: Connection,
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
  ) { }

  public async saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
    const user = new UserEntity();
    user.id = ulid();
    user.name = name;
    user.email = email;
    user.password = password;
    user.signupVerifyToken = signupVerifyToken;
    await this.usersRepository.save(user);
  }

  // private async checkUserExists(emailAddress: string): Promise<boolean> {
  //   const user = await this.usersRepository.findOne({ email: emailAddress });
  
  //   return user !== undefined;
  // }

  // async createUser(name: string, email: string, password: string) {
  //   const userExist = await this.checkUserExists(email);
  //   if (userExist) {
  //     throw new UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');
  //   }
  // }
  
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
