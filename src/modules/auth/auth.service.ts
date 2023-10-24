/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { ThrottleService } from '../throttle/throttle.service';
import { ThrottleType } from '../throttle/enum/throttle.enum';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private throttleService: ThrottleService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: { email: string; password: string }) {
    const userData = await this.userService.validateUser(
      user.email,
      user.password,
    );

    const throttle = await this.throttleService.create(
      userData.id,
      ThrottleType.LOGIN,
    );

    return {
      access_token: throttle.token,
      fullName: userData.fullName,
      id: userData.id,
    };
  }
}
