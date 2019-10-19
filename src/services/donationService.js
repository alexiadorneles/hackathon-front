class DonationService {
    async makeDonation({
        campaign,
        quantidade,
        material
    }) {
        return await httpService.post(`/donation`, {
            campaign,
            quantidade,
            material
        })
    }
}

const donationService = new DonationService()
export { donationService }