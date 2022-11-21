import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { ulid } from 'ulid';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    private connection: Connection,
    @InjectRepository(Board) private boardsRepository: Repository<Board>,
  ) { }

  public async saveBoard(name: string) {
    const board = new Board();
    board.id = ulid();
    board.name = name;
    await this.boardsRepository.save(board);
  }

  public async findAllBoard(): Promise<Board[]> {
    const board = await this.boardsRepository.find({});
  
    return board;
  }

  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  findAll() {
    return `This action returns all board`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
