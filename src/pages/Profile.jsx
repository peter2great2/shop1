import { StickyNavbar } from '../layouts/Navbar';

const ProfilePage = () => {
  return (
  <div>
  <StickyNavbar />
  <br />
     <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header Section */}
        <div className="flex items-center gap-6 border-b pb-6 mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">johndoe@example.com</p>
            <p className="text-sm text-gray-500 mt-2">Joined: January 2023</p>
          </div>
        </div>

        {/* Account Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Personal Info</h2>
            <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-gray-600 mt-2"><strong>Address:</strong> 123 Main Street, Cityville, USA</p>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600">
              Edit Info
            </button>
          </div>

          {/* Recent Orders */}
          <div className="bg-gray-50 p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-4 flex justify-between">
                <span>Order #12345</span>
                <span className="text-gray-500">Dec 12, 2024</span>
                <span className="text-green-600 font-medium">Completed</span>
              </li>
              <li className="py-4 flex justify-between">
                <span>Order #12346</span>
                <span className="text-gray-500">Dec 10, 2024</span>
                <span className="text-red-600 font-medium">Pending</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Account Actions */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-red-500 text-white rounded shadow hover:bg-red-600">
            Delete Account
          </button>
        </div>
      </div>
    </div>

  </div>
  );
};
export default ProfilePage;
