enum UserRole {
  User,
  Admin,
  Super,
}

interface User {
  id: number
  givenName: string
  familyName: string
  dateOfBirth: string
  role: UserRole
}

interface Car {
  id: number
  make: string
  model: string
  user: User
}

interface Data {
  users: User[]
  cars: Car[]
}

const DATA: Data = {
  users: [],
  cars: [],
}

export const db = (dataType: string, ...opts) => {
  // You can use the DATA object in here
  // Begin editing after this line
  console.log(DATA)

  return {
    getAllUsers: (): User[] => {},
    getOneUser: (): User => {},
    createUser: (): Partial<User> => {},
    updateUser: (): Partial<User> => {},
    deleteUser: (): boolean => {},
    getAllCars: (): Car[] => {},
    getOneCar: (): Car => {},
    createCar: (): Partial<Car> => {},
    updateCar: (): Partial<Car> => {},
    deleteCar: (): boolean => {},
  }
  // End editing after this line
}
