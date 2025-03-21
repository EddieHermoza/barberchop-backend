"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register() { }
    async signIn({ email, password }) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('El usuario no existe');
        }
        let roleId = 0;
        if (user.role === 'ADMINISTRADOR' && user.Admin) {
            roleId = user.Admin.id;
        }
        else if (user.role === 'CLIENTE' && user.Customer) {
            roleId = user.Customer.id;
        }
        else if (user.role === 'BARBERO' && user.Barber) {
            roleId = user.Barber.id;
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match)
            throw new common_1.UnauthorizedException('La contraseña es incorrecta');
        const payload = {
            id: user.id,
            username: user.name + ' ' + user.lastName,
            email: user.email,
            role: user.role,
            roleId: roleId,
        };
        return {
            user: payload,
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, {
                    secret: process.env.JWT_SECRET,
                    expiresIn: '1d',
                }),
                refreshToken: await this.jwtService.signAsync(payload, {
                    secret: process.env.JWT_REFRESH_SECRET,
                    expiresIn: '7d',
                }),
            },
        };
    }
    async signOut() { }
    async refresh(user) {
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            roleId: user.roleId,
        };
        return {
            accessToken: await this.jwtService.signAsync(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: '1d',
            }),
            refreshToken: await this.jwtService.signAsync(payload, {
                secret: process.env.JWT_REFRESH_SECRET,
                expiresIn: '7d',
            }),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map