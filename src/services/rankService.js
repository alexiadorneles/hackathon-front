import { httpService } from "./httpService"

class RankService {
    async getRank() {
        return await httpService.get('public/user/rank')
    }
}

const rankService = new RankService()
export { rankService }