import Link from "next/link";

export default function TripCard({ trip }) {
    return (
        <Link href={`/trip/${trip._id}`}>
            <div className="border p-4 rounded shadow">
                <h2 className="font-bold text-xl">
                    {trip.destination}
                </h2>

                <p>{trip.days} Days</p>

                <p>{trip.budget}</p>
            </div>
        </Link>
    );
}