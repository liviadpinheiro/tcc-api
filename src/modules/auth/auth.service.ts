/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
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
    const payload = { email: user.email, sub: user.password };

    const userData = await this.userService.findByEmail(user.email);

    return {
      access_token: this.jwtService.sign(payload),
      fullName: userData?.fullName,
      id: userData?.id,
    };
  }
}
