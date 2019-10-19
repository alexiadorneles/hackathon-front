import { httpService } from "./httpService"

class CampaignService {
    async findById(id) {
        return await httpService.get(`public/campaign/id/${id}`)
    }

    async findAll(){
        return  await httpService.get(`public/campaign`)
    }

    async findAllItemsById(id){
        return  await httpService.get(`public/campaign/id/${id}/items`)
    }
}

const campaignService = new CampaignService()
export { campaignService }