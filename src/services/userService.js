import { httpService } from './httpService';

export class UserService {

  async createUser({ name, email, password, cpf, coordinates }) {
    const firstName  = name.split(' ')[0]
    const lastName  = name.split(' ')[1]
    const createResponse = await httpService.post('public/user', { firstName, lastName, email, password, cpf, latitude: coordinates.lat, longitude: coordinates.lng })
    return createResponse
  }
}