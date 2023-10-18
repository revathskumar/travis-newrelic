import { Test, TestingModule } from '@nestjs/testing';
import { PaaService } from './paa.service';

describe('PaaService', () => {
  let service: PaaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaaService],
    }).compile();

    service = module.get<PaaService>(PaaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
