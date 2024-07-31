// src/app/users/users.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<User[]> {
    return await this.usersRepository.find({
      // Properties to return. We don't want the password property.
      select: ['firstname', 'lastname', 'email'],
      where: [{ id: id }],
    });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
  // Method to update a user by ID
  async updateUser(id: number, updatedUserData: Partial<User>): Promise<User> {
    // Find the user by ID
    const existingUser = await this.usersRepository.findOne({ where: { id } });

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Merge existing user data with updated data
    const updatedUser = { ...existingUser, ...updatedUserData };

    // Save the updated user data
    return this.usersRepository.save(updatedUser);
  }

  // delete
  deleteUser(user: User): void {
    this.usersRepository.delete(user);
  }
}
