<template>
    <div class="schedule-container">
        <h1 class="schedule-title">Расписание конференции</h1>
        <div class="schedule-tabs">
            <div
                v-for="(day, index) in schedule"
                :key="index"
                :class="{ active: activeTab === index }"
                @click="activeTab = index"
                class="schedule-tab"
            >
                {{ day.date }}
            </div>
        </div>
        <div class="schedule-events">
            <div v-for="(event, index) in schedule[activeTab].events" :key="index" class="schedule-event">
                <div class="schedule-event-time">{{ event.time }}</div>
                <div class="schedule-event-info">
                    <div class="schedule-event-name">{{ event.name }}</div>
                    <div class="schedule-event-speaker">{{ event.speaker }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0,
            schedule: [
                {
                    date: "День 1",
                    events: [
                        {
                            time: "9:00 - 10:00",
                            name: "Opening Keynote",
                            speaker: "John Doe",
                        },
                        {
                            time: "10:30 - 11:30",
                            name: "Web Development Trends",
                            speaker: "Jane Smith",
                        },
                        {
                            time: "1:00 - 2:00",
                            name: "Design Thinking Workshop",
                            speaker: "Bob Johnson",
                        },
                    ],
                },
                {
                    date: "День 2",
                    events: [
                        {
                            time: "9:00 - 10:00",
                            name: "Machine Learning in Action",
                            speaker: "Sarah Lee",
                        },
                        {
                            time: "10:30 - 11:30",
                            name: "Building Scalable Applications",
                            speaker: "Tom Williams",
                        },
                        {
                            time: "1:00 - 2:00",
                            name: "UX Design Best Practices",
                            speaker: "Emily Brown",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.schedule-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.schedule-title {
    font-size: 36px;
    font-weight: bold;
    margin-top: 50px;
}

.schedule-tabs {
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
}

.schedule-tab {
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #f0f0f0;
    color: #333;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
}

.schedule-tab:hover {
    background-color: #333;
    color: #fff;
}

.schedule-tab.active {
    background-color: #333;
    color: #fff;
}

.schedule-events {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.schedule-event {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 600px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0);
}

.schedule-event-time {
    font-size: 24px;
    font-weight: bold;
}

.schedule-event-info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.schedule-event-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}

.schedule-event-speaker {
    font-size: 16px;
    color: #999;
}

</style>
