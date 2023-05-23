export interface CampsiteType {
  _id: string;
  title: string;
  description: string;
  equipments: string[];
  region: string;
  price: number;
  image: string;
  bookings: { start: Date; end: Date }[];
}

export interface UserInputs {
  equipment: string | "Equipments";
  region: string | "Regions";
  start: Date | null;
  end: Date | null;
}

export function filter(
  userInputs: UserInputs,
  campsiteList: CampsiteType[]
): CampsiteType[] {
  const { equipment, region, start, end } = userInputs;

  // Apply filters based on user inputs
  const filteredList = campsiteList.filter((campsite) => {
    // Filter by equipment if not "Equipments"
    const hasEquipment =
      equipment === "Equipments" || campsite.equipments.includes(equipment);

    // Filter by region if not "Regions"
    const isSameRegion = region === "Regions" || region === campsite.region;

    // Filter by availability if start and end dates are provided
    const isAvailable =
      start === null ||
      end === null ||
      campsite.bookings.every((booking) => {
        return (
          (start >= booking.end || end <= booking.start) &&
          (end <= booking.start || start >= booking.end)
        );
      });

    return hasEquipment && isSameRegion && isAvailable;
  });

  return filteredList;
}
