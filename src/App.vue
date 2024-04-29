<script setup>
import Chart from './components/Chart.vue'
import DonutChart from './components/DonutChart.vue'
const menu = [
  {name: 'option 1', icon:''},
  {name: 'option 2', icon:''},
  {name: 'option 3', icon:''},
  {name: 'option 4', icon:''},
  {name: 'option 5', icon:''},
]

const transactions =[
  {icon:'on', date:'Dec 24, 2023', type:'Send transactions', ammount:'$123.00', balance:'$ 100.99'},
  {icon:'off', date:'Dec 24, 2023', type:'Received transactions', ammount:'$123.00', balance:'$ 100.99'},
  {icon:'on', date:'Dec 24, 2023', type:'Send transactions', ammount:'$123.00', balance:'$ 100.99'},
  {icon:'icon', date:'Dec 24, 2023', type:'Received transactions', ammount:'$123.00', balance:'$ 100.99'},
]

const invoices = [
  {no:'#bcs101',date:'Jun 21, 2022', avatar:'/img/avatar-1.jpeg', name:'Denis', ammount:'$ 200000.00', status:'Successfull',},
  {no:'#bcs101',date:'Jun 21, 2022', avatar:'/img/avatar-1.jpeg', name:'Denis', ammount:'$ 200000.00', status:'Pending',},
  {no:'#bcs101',date:'Jun 21, 2022', avatar:'/img/avatar-1.jpeg', name:'Denis', ammount:'$ 200000.00', status:'Successfull',},
  {no:'#bcs101',date:'Jun 21, 2022', avatar:'/img/avatar-1.jpeg', name:'Denis', ammount:'$ 200000.00', status:'Pending',},
  {no:'#bcs101',date:'Jun 21, 2022', avatar:'/img/avatar-1.jpeg', name:'Denis', ammount:'$ 200000.00', status:'Pending',},
]

</script>
<template>
  <div class="flex min-h-screen w-full font-sans bg-gray-700">
    <!-- MENU -->
    <aside class="flex w-64 flex-col px-4 pt-10 pb-6">
      <a href="" class="flex gap-x-4 px-8 items-center text-2xl font-medium text-white focus:outline-none">
        <i class="ri-apps-line w-6 h-6 stroke-current"></i>
        <span>App Name</span>
      </a>

      <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14">
        <li v-for="item in menu">
          <a href="" class="flex items-center gap-x-4 text-gray-400 hover:text-white hover:font-medium focus:text-white focus:font-medium focus:outline-none">
            <i class="ri-table-fill h-6 w-6 stroke-current"></i>
            <span>{{ item.name}}</span>
          </a>
        </li>
      </ul>

      <div class="rounded-md shadow-md shadow-gray-700/10 sticky bottom-0 bg-gray-900 p-6 bg-top bg-[url(/img/line-pattern.svg)]">
        <div class="text-white">Lorem ipsum dolor sit amet <span class="font-bold">5$</span>.</div>
        <div class="mt-3 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur more and more.</div>
        <button class="mt-4 w-full bg-gray-700 py-2 text-sm font-normal text-gray-400 hover:text-white">Invite</button>
      </div> 

    </aside>

    <!-- MAIN  -->
    <main class="flex min-h-screen flex-1 flex-col rounded-l-[48px] bg-gray-800 p-8">
      <!-- NAVIGATOR -->
      <nav class="flex items-center gap-x-6">
        <div class="w-full flex items-center justify-between">
          <h1 class="text-[30px] font-bold text-white">Overview</h1>
          <!-- SEARCH -->
          <div class="flex items-center gap-x-2">
            <div class="relative">
              <span class="absolute inset-y-0 flex items-center px-3 pointer-events-none">
                <i class="ri-search-line w-6 h-6 stroke-current text-gray-400"></i>
              </span>
              <input type="text" placeholder="Search"
              class="rounded-md bg-gray-900 py-3 pr-4 pl-10 text-sm text-gray-400 focus:text-white focus:outline-none">
            </div>
            <button class="rounded-md bg-gray-900 py-3 px-4 text-sm text-gray-400 hover:text-white hover:font-medium">Add Account</button>
          </div>
          <div class=" flex w-2/5 items-center justify-between">
            <!-- OPTIONS/NOTIFICATIONS -->
            <div class="flex items-center gap-x-2.5">
              <button class="relative text-gray-400 flex h-11 w-11 items-center justify-center bg-gray-900 rounded-full hover:text-white">
                <i class="ri-notification-line w-7 h-7 stroke-current"></i>
                <div class="absolute top-3 right-3 flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-indigo-400"></span>
                  <span class="inline-flex h-2 w-2 rounded-full bg-indigo-400"></span>
                </div>
              </button>
              <button class="text-gray-400 flex h-11 w-11 items-center justify-center bg-gray-900 rounded-full hover:text-white">
                <i class="ri-mail-line w-7 h-7 stroke-current"></i>
              </button>
              <button class="text-gray-400 flex h-11 w-11 items-center justify-center bg-gray-900 rounded-full hover:text-white">
                <i class="ri-inbox-archive-line w-7 h-7 stroke-current"></i>
              </button>
            </div>
            <!-- PROFILE OPTIONS -->
            <button class="text-gray-400 flex items-center justify-center bg-gray-900 h-11 rounded-full px-2 hover:text-white">
              <img src="../public/img/avatar-1.jpeg" alt="" class="h-8 w-8 rounded-full object-cover">
              <span class="pl-2 text-sm">Denis</span>
              <i class="ri-arrow-down-line w-6 h-6 stroke-current"></i>
            </button>
          </div>
        </div>
      </nav>

      <!-- CONTENT -->
      <div class="flex gap-x-6 py-8">
        <div class="flex w-3/5 flex-col gap-y-8">
          <!-- CARD 1 -->
          <div class="flex items-center justify-between rounded-md bg-gray-900 font-medium p-7 bg-[url(/img/line-pattern.svg)]" >
            <div class="flex items-center gap-x-4">
              <div class="py-3 px-4 rounded-full bg-gray-700">
                <i class="ri-secure-payment-fill text-indigo-400 h-5 w-5 fill-current"></i>
              </div>
              <div>
                <div class="text-sm text-gray-400">CARD NUMBER</div>
                <div class="pt-1 text-white">5540 1987 1899 1890</div>
              </div>
            </div> 
            <div class="h-full w-px bg-gray-700"></div>
            <div>
              <div class="text-sm text-gray-400">Expire Date</div>
              <div class="pt-1 text-white">11/2027</div>
            </div>
            <div class="h-full w-px bg-gray-700"></div>
            <div>
              <div class="text-sm text-gray-400">CVC</div>
              <div class="flex items-center gap-x-2">
                <div class="pt-1 text-white">******</div>
                <button class="">
                  <i class="ri-eye-line w-6 h-6 stroke-current text-white"></i>
                </button>
              </div>
            </div>
            <div class="h-full w-px bg-gray-700"></div>
            <div>
              <div class="text-sm text-gray-400">Status</div>
              <div class="pt-1 text-white">Active</div>
            </div>
          </div>

          <div class="flex flex-col justify-between rounded-md bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-white font-medium text-[30px]">Statistics of cost</h2>
              <button class="inline-flex items-center rounded-md bg-gray-700 text-gray-400 py-2 px-4 text-sm gap-x-1 hover:text-white hover:font-medium">
                <span>Jan - Aug</span>
                <i class="ri-arrow-down-line stroke-current w-6 h-6"></i>
                <Chart class="h-6 w-6 stroke-current"></Chart>
              </button>
            </div>
            <div class="flex pt-8 gap-x-8">
              <Chart class=" w-full"/>
              <div class=" flex flex-col gap-4">
                <div class="flex items-center gap-x-3 rounded-md bg-indigo-400 p-4">
                  <div class="rounded-full bg-gray-900 text-indigo-700 px-2 py-1">
                    <i class="ri-wallet-3-fill h-6 w-6 fill-current"></i>
                  </div>
                  <div>
                    <div class="text-sm text-indigo-700">Revenue</div>
                    <div class="font-normal">$10.567</div>
                  </div>
                </div>
                <div class="flex items-center gap-x-3 rounded-md bg-green-400 p-4">
                  <div class="rounded-full bg-gray-900 text-green-700 px-2 py-1">
                    <i class="ri-patreon-fill h-6 w-6 fill-current"></i>
                  </div>
                  <div>
                    <div class="text-sm text-green-700">Revenue</div>
                    <div class="font-normal">$10.567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-between rounded-md bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-white font-medium text-[30px]">Recents transactions</h2>
              <button class="inline-flex items-center rounded-md bg-gray-700 text-gray-400 py-2 px-4 text-sm gap-x-1 hover:text-white hover:font-medium">
                <span>View all</span>
              </button>
            </div>
            <table class="font-medium">
              <tbody>
                <tr v-for="transaction in transactions" class="border-b border-gray-700 last:border-none">
                  <td class="py-4">
                    <div class=" flex items-center gap-x-4">
                      <div class=" flex items-center justify-center rounded-full p-2"
                      :class="transaction.icon==='on'?'bg-indigo-400':'bg-green-400'">
                        <i class="h-5 w-5 fill-current text-gray-800"
                        :class="transaction.icon==='on'?'ri-upload-2-fill':'ri-download-2-fill'"></i>
                      </div>
                      <span class=" text-md text-white">{{transaction.type}}</span>
                    </div>
                  </td>
                  <td class="py-4">
                    <div class="flex items-center text-gray-400 gap-x-2">
                      <div class="flex items-center justify-center bg-gray-700 rounded-full p-2">
                        <i class="ri-calendar-event-fill h-6 w-6 fill-current"></i>
                      </div>
                      <span class="text-md">{{transaction.date}}</span>
                    </div>
                  </td>
                  <td class="py-4"><div><span class="text-md text-white">{{transaction.ammount}}</span></div></td>
                  <td class="py-4"><div><span class="text-md text-white">{{transaction.balance}}</span></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-col justify-between rounded-md bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-white font-medium text-[30px]">Invoices</h2>
              <button class="inline-flex items-center rounded-md bg-gray-700 text-gray-400 py-2 px-4 text-sm gap-x-1 hover:text-white hover:font-medium">
                <i class="ri-add-line h-6 w-6 fill-current"></i>
                <span>New Invoices</span>
              </button>
            </div>
            <table class="font-medium mt-4">
              <thead>
                <td class="font-extrabold py-1 text-md text-gray-400">No</td>
                <td class="font-extrabold py-1 text-md text-gray-400">Date</td>
                <td class="font-extrabold py-1 text-md text-gray-400">Client</td>
                <td class="font-extrabold py-1 text-md text-gray-400">Ammount</td>
                <td class="font-extrabold py-1 text-md text-gray-400">Status</td>
              </thead>
              <tbody>
                <tr v-for="invoice in invoices" class="border-b border-gray-700 last:border-none">
                  <td class="py-4">
                    <span class="text-white text-sm">{{ invoice.no }}</span>
                  </td>
                  <td class="py-4">
                    <span class="text-gray-400">{{ invoice.date }}</span>
                  </td>
                  <td class="py-4">
                    <div class="flex items-center gap-x-2">
                      <img :src="invoice.avatar" alt="" class="h-7 w-7 rounded-full object-cover">
                      <span class="text-white">{{ invoice.name }}</span>
                    </div>
                  </td>
                  <td class="py-4">
                    <span class="text-white text-sm">{{ invoice.ammount }}</span>
                  </td>
                  <td class="py-4">
                    <div class="flex items-center justify-center gap-x-2 rounded-md border py-2 px-1"
                    :class="invoice.status ==='Pending'?'bg-indigo-700/20 text-indigo-400 border-indigo-400/10':'bg-green-700/20 text-green-400 border-green-400/10'">
                    
                      <span class="w-2 h-2 rounded-full" :class="invoice.status==='Pending'?'bg-indigo-400 animate-ping':'bg-green-400'"></span>
                      <span class="text-xs">{{ invoice.status }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex w-2/5 flex-col gap-y-8">
          <div class="flex flex-col justify-between rounded-md bg-gray-900 p-7">
            <div class="flex items-center justify-between bg-gray-700 p-7">
              <h2 class="text-white font-medium text-[30px]">Scheduling transfers</h2>
              <button class="inline-flex items-center rounded-md bg-gray-700 text-gray-400 py-2 px-4 text-sm gap-x-1 hover:text-white hover:font-medium">
                <i class="ri-add-line h-6 w-6 fill-current"></i>
                <span>Add new</span>
              </button>
            </div>
            <div class="grid grid-cols-3 gap-x-4 pt-4">
              <div class="rounded-md bg-gray-600 p-3">
                <img src="/public/img/YouTube-Logo.png" alt="" class="w-16">
                <div class="text-white text-sm pt-6">$45,2/m</div>
              </div>
              <div class="rounded-md bg-gray-600 p-3">
                <img src="/public/img/Netflix-Logo.png" alt="" class="w-16">
                <div class="text-white text-sm pt-6">$45,2/m</div>
              </div>
              <div class="rounded-md bg-gray-600 p-3">
                <img src="/public/img/Spotify-Logo.png" alt="" class="w-16">
                <div class="text-white text-sm pt-6">$45,2/m</div>
              </div>
            </div>
            <button class="mt-4 w-full rounded-md bg-gray-600 text-gray-300 py-3 hover:text-white">Get Started</button>
          </div>
          <div class="flex flex-col justify-between rounded-md bg-gray-900 p-7">
              <div class="flex items-center justify-between">
              <h2 class="text-white font-medium text-[30px]">Statistics of cost</h2>
              <button class="inline-flex items-center rounded-md bg-gray-700 text-gray-400 py-2 px-4 text-sm gap-x-1 hover:text-white hover:font-medium">
                <span>Weekly</span>
                <i class="ri-arrow-down-line stroke-current w-6 h-6"></i>
              </button>
            </div>
            <div>
              <div class="mt-4 rounded-md flex w-full items-start gap-x-4 bg-gray-700 p-4">
                <div class="flex items-center justify-center rounded-full bg-indigo-800 p-2">
                  <i class="ri-bill-fill h-5 w-5 fill-current"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between font-extrabold leading-none">
                    <span class="text-white">Investment</span>
                    <span class="text-white">$2.350,02</span>
                  </div>
                  <span class="leading-3 text-gray-400 font-extrabold">2 month income 88%</span>
                  <div class="mt-3 h-2 w-full rounded-full bg-gray-600">
                    <div class="mt-3 h-2 w-[80%] rounded-full bg-indigo-400"></div>
                  </div>
                </div>
              </div>
              <div class="mt-4 rounded-md flex w-full items-start gap-x-4 bg-gray-700 p-4">
                <div class="flex items-center justify-center rounded-full bg-green-400 p-2">
                  <i class="ri-bill-fill h-5 w-5 fill-current"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between font-extrabold leading-none">
                    <span class="text-white">Mutual founds</span>
                    <span class="text-white">$1.350,02</span>
                  </div>
                  <span class="leading-3 text-gray-400 font-extrabold">3 month income 50%</span>
                  <div class="mt-3 h-2 w-full rounded-full bg-gray-600">
                    <div class="mt-3 h-2 w-[50%] rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between rounded-md bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-white font-medium text-[30px]">Revenue statistics</h2>
              <button class="px-2 py-1 border border-gray-400 rounded-full text-gray-400 hover:text-white hover:border-white">
                <i class="ri-more-line h-6 w-6"></i>
              </button>
            </div>
            <div class="flex items-center gap-x-4 pt-4">
              <div class="w-[40%] flex items-center justify-center rounded-md bg-gray-700 p-4">
                <DonutChart/>
              </div>
              <div class="flex flex-1 flex-col gap-4">

                <div class="flex items-center gap-x-3 rounded-md bg-indigo-400 p-4">
                  <div class="rounded-full bg-gray-900 text-indigo-700 px-2 py-1">
                    <i class="ri-wallet-3-fill h-6 w-6 fill-current"></i>
                  </div>
                  <div>
                    <div class="text-md text-indigo-700">Invest</div>
                    <div class="font-normal">$10.567</div>
                  </div>
                </div>

                <div class="flex items-center gap-x-3 rounded-md bg-green-400 p-4">
                  <div class="rounded-full bg-gray-900 text-green-700 px-2 py-1">
                    <i class="ri-patreon-fill h-6 w-6 fill-current"></i>
                  </div>
                  <div>
                    <div class="text-md text-green-700">Mutual Found</div>
                    <div class="font-normal">$10.567</div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  </div>
</template>
