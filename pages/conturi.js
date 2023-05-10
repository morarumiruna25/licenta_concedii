import React from "react";
import Link from "next/link";
const Conturi = () => {
	return (
		<div class="relative overflow-x-auto shadow-md rounded-lg rounded-t-[0px]">
			<table class="w-full text-sm text-left text-gray-500 ">
				<thead class="text-xs text-white uppercase bg-main border-t-2 border-pink ">
					<tr>
						<th scope="col" class="px-6 py-3">
							Nume
						</th>
						<th scope="col" class="px-6 py-3">
							<div class="flex items-center">
								Color
								<Link href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-3 h-3 ml-1"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 320 512"
									>
										<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
									</svg>
								</Link>
							</div>
						</th>
						<th scope="col" class="px-6 py-3">
							<div class="flex items-center">
								Category
								<Link href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-3 h-3 ml-1"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 320 512"
									>
										<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
									</svg>
								</Link>
							</div>
						</th>
						<th scope="col" class="px-6 py-3">
							<div class="flex items-center">
								Price
								<Link href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-3 h-3 ml-1"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 320 512"
									>
										<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
									</svg>
								</Link>
							</div>
						</th>
						<th scope="col" class="px-6 py-3">
							<div class="flex">
								{" "}
								<span class="sr-only">Edit</span>
								<span class="sr-only">Delete</span>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white"></tr>
					<tr class="bg-white dark:bg-gray-800">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							Magic Mouse 2
						</th>
						<td class="px-6 py-4">Black</td>
						<td class="px-6 py-4">Accessories</td>
						<td class="px-6 py-4">$99</td>
						<td class="px-6 py-4 text-right">
							<div class="flex justify-evenly">
								{" "}
								<Link href="#" class="font-medium text-blue4 hover:underline">
									Edit
								</Link>{" "}
								<Link href="#" class="font-medium text-pink hover:underline">
									Delete
								</Link>{" "}
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Conturi;
