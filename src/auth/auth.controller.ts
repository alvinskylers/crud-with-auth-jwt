/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginUserDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDTO: LoginUserDTO) {
    const user = await this.authService.validateUser(loginDTO.email, loginDTO.password);
    if (user instanceof UnauthorizedException) {
      throw user;
    }

    console.log(user.id);
    return this.authService.login({ id: user.id, email: user.email, role: user.role });
  }

  @Post('refresh')
  async refresh(@Body('refreshToken') refreshToken: string) {
    const payload = this.authService.verifyToken(refreshToken);

    if (payload instanceof UnauthorizedException) {
        throw payload;
    }

    const user = await this.authService.findUserById(payload.sub);

    if (user instanceof UnauthorizedException) {
        throw user;
    }
    if (!user) {
        throw new UnauthorizedException('User not found');
    }

    return this.authService.login({ id: user.id, email: user.email, role: user.role });
  }
}
