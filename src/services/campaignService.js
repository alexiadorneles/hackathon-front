import { httpService } from "./httpService"

class CampaignService {
    async findById(id) {
        return await httpService.get(`public/user/rank${id}`)
    }
}

const campaignService = new CampaignService()
export { campaignService }