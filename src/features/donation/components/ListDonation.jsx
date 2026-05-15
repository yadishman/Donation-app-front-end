import useDonation from "../hooks/useDonation"
import Donation from "./Donation"
import './Donation.css'

export default function ListDonation({ id }) {
    const { donations } = useDonation(id)

    if (!donations?.length) {
        return (
            <div className="donations-empty">
                No donations yet — be the first to give.
            </div>
        )
    }

    return (
        <div className="donations-list">
            {donations.map(donation => (
                <Donation donate={donation} key={donation._id || donation.createdAt} />
            ))}
        </div>
    )
}
