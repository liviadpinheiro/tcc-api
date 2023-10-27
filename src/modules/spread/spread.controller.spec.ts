import { Test, TestingModule } from '@nestjs/testing';
import { SpreadController } from './spread.controller';

describe('SpreadController', () => {
  let controller: SpreadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpreadController],
    }).compile();

    controller = module.get<SpreadController>(SpreadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
