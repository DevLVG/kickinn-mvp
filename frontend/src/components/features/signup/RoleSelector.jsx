'use client';

export default function RoleSelector({ selectedRole, onRoleChange }) {
  const roles = [
    {
      id: 'ideator',
      label: 'Ideator',
      description: 'Create and launch new projects'
    },
    {
      id: 'contributor',
      label: 'Contributor',
      description: 'Support and contribute to existing projects'
    },
    {
      id: 'investor',
      label: 'Investor',
      description: 'Invest in promising projects'
    }
  ];

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Select your role
      </label>
      <div className="space-y-3">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedRole === role.id
                ? 'border-[#4F6F6C] bg-[#4F6F6C]/5'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onRoleChange(role.id)}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id={role.id}
                name="role"
                value={role.id}
                checked={selectedRole === role.id}
                onChange={() => onRoleChange(role.id)}
                className="h-4 w-4 text-[#4F6F6C] border-gray-300 focus:ring-[#4F6F6C]"
              />
              <div className="ml-3">
                <label
                  htmlFor={role.id}
                  className="block text-sm font-medium text-gray-900"
                >
                  {role.label}
                </label>
                <p className="text-sm text-gray-500">{role.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
