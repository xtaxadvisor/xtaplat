import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { teamService } from '../services/api/team';
import { useNotificationStore } from '../lib/store';
export function useTeamMembers() {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    const { data: teamMembers, isLoading } = useQuery({
        queryKey: ['team-members'],
        queryFn: teamService.getTeamMembers
    });
    const addTeamMemberMutation = useMutation({
        mutationFn: teamService.addTeamMember,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['team-members'] });
            addNotification('Team member added successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to add team member', 'error');
        }
    });
    const updateTeamMemberMutation = useMutation({
        mutationFn: teamService.updateTeamMember,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['team-members'] });
            addNotification('Team member updated successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to update team member', 'error');
        }
    });
    const deleteTeamMemberMutation = useMutation({
        mutationFn: teamService.deleteTeamMember,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['team-members'] });
            addNotification('Team member removed successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to remove team member', 'error');
        }
    });
    return {
        teamMembers,
        isLoading,
        addTeamMember: addTeamMemberMutation.mutate,
        updateTeamMember: updateTeamMemberMutation.mutate,
        deleteTeamMember: deleteTeamMemberMutation.mutate
    };
}
