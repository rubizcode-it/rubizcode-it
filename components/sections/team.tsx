import Image from 'next/image'
import Link from 'next/link'
import { team } from '@/lib/constants/team'

export const Team = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(member => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {member.social.linkedin && (
                  <Link href={member.social.linkedin} className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                )}
                {member.social.twitter && (
                  <Link href={member.social.twitter} className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 