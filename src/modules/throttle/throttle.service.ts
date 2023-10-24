import { Injectable } from '@nestjs/common';
import { ThrottleRepository } from './throttle.repository';
import { JwtService } from '@nestjs/jwt';
import { ThrottleType } from './enum/throttle.enum';

@Injectable()
export class ThrottleService {
  constructor(
    private throttleRepository: ThrottleRepository,
    private jwtService: JwtService,
  ) {}

  async create(userId: string, type: ThrottleType) {
    const payload = { userId, type };

    return this.throttleRepository.create({
      userId,
      type,
      token: this.jwtService.sign(payload),
    });
  }

  async isTokenExpired(token: string, type: ThrottleType): Promise<boolean> {
    const throttle = await this.throttleRepository.findByToken(token);

    if (!throttle) return true;

    const decoded = this.jwtService.decode(token) as any;

    if (!decoded || !decoded.exp || decoded.type !== type) {
      return true;
    }

    const expirationDate = new Date(decoded.exp * 1000);
    const currentDate = new Date();

    return expirationDate < currentDate;
  }

  async remove(token: string) {
    return this.throttleRepository.remove(token);
  }
}
